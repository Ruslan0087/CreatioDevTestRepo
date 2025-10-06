namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System.Web.SessionState;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class TournamentService : BaseService, IReadOnlySessionState
    {

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public int GetTotalDurationOfFinishedGamesByTournamentCode(string code)
        {
            if (string.IsNullOrEmpty(code))
            {
                return -1;
            }

            Select select = new Select(UserConnection)
                .Column(Func.Sum("UsrDurationSeconds"))
                .From("UsrTournament")
                .Join(JoinType.Inner, "UsrGame")
                .On("UsrTournament", "Id").IsEqual("UsrGame", "UsrTournamentId")
                .Where("UsrTournament", "UsrCode").IsEqual(Column.Parameter(code))
                .And("UsrGame", "UsrGameResultId").Not().IsNull()
            as Select;
            
            int result = select.ExecuteScalar<int>();
            return result;
        }

    }
}
